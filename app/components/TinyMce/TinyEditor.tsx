import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

export default function TinyEditor({ setNewsContent, newsContent }: { newsContent?: string | boolean, setNewsContent: Dispatch<SetStateAction<string>> }) {
    const editorRef = useRef<TinyMCEEditor | null>(null);
    const [isUploadingImage, setIsUploadingImage] = useState(false);

    // Controlled mode: TinyMCE's `value` + `onEditorChange` keeps the caret/selection
    // stable across re-renders. Previously the content was fed back via `initialValue`,
    // which tinymce-react treats as a reset — so every change (e.g. pressing Enter)
    // reloaded the content and jumped the cursor to the start.
    const handleEditorChange = (content: string) => {
        setNewsContent(content);
    };

    const uploadImageToDropbox = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileType", "image");

        const response = await fetch("/api/admin/upload", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.error || "Image upload failed");
        }

        return data.url as string;
    };

    return (
        <>
            <Editor
                apiKey={process.env.NEXT_PUBLIC_TINY_MCE_KEY}
                onInit={(_evt, editor) => {
                    editorRef.current = editor
                }}
                value={typeof newsContent === "string" ? newsContent : ""}
                onEditorChange={handleEditorChange}
                init={{
                    height: 500,
                    menubar: false,
                    placeholder: 'Start writing the blog content...',
                    advcode_inline: true,
                    theme: 'silver',
                    image_title: true,
                    automatic_uploads: false,
                    file_picker_types: 'image',

                    // Render editor content with the same styles as the frontend blog detail page
                    // (#blogContent rules mirrored in public/css/blog-editor-content.css).
                    body_id: 'blogContent',
                    content_css: [
                        'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
                        'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap',
                        '/css/blog-editor-content.css',
                    ],
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                        'code', 'image',
                    ],
                    file_picker_callback: (cb) => {
                        const input = document.createElement("input");
                        input.setAttribute("type", "file");
                        input.setAttribute("accept", "image/*");

                        input.addEventListener("change", async () => {
                            const file = input.files?.[0];
                            if (!file) return;

                            let notification: { close: () => void } | null = null;

                            try {
                                setIsUploadingImage(true);

                                if (editorRef.current) {
                                    notification = editorRef.current.notificationManager.open({
                                        text: "Uploading image...",
                                        type: "info",
                                        timeout: 0,
                                    });
                                }

                                const uploadedUrl = await uploadImageToDropbox(file);

                                cb(uploadedUrl, { title: file.name });

                                if (editorRef.current) {
                                    editorRef.current.notificationManager.open({
                                        text: "Image uploaded successfully",
                                        type: "success",
                                        timeout: 2000,
                                    });
                                }
                            } catch (error) {
                                console.error("TinyMCE image upload error:", error);

                                if (editorRef.current) {
                                    editorRef.current.notificationManager.open({
                                        text: "Image upload failed",
                                        type: "error",
                                        timeout: 3000,
                                    });
                                }
                            } finally {
                                setIsUploadingImage(false);
                                notification?.close();
                            }
                        });

                        input.click();
                    },
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help | code | image',

                    setup: () => {
                        // Ensure jQuery is loaded before the plugin (add jQuery via a global script or import)
                        if (typeof window !== 'undefined' && !window.jQuery) {
                            const script = document.createElement('script');
                            script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
                            script.onload = () => {
                                console.log('jQuery loaded');
                            };
                            document.head.appendChild(script);
                        }
                    },
                }}
            />
            {isUploadingImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}
            {/* <button onClick={log}>Log editor content</button> */}
        </>
    );
}