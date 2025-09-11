"use client";

import React from "react";
import parse, { DOMNode, domToReact } from "html-react-parser";
import { motion } from "framer-motion";
import { moveUp } from "@/app/components/motionVarients";

interface BlogContentProps {
  html: string;
}

const BlogContent = ({ html }: BlogContentProps) => {
  let imgIndex = 0;

  return (
    <article id="blogContent">
      {parse(html, {
        replace: (domNode: DOMNode) => {
          if (domNode.type === "tag") {
            const children = domToReact((domNode as any).children);

            switch (domNode.name) {
              case "h2":
                return (
                  <motion.h2
                    variants={moveUp(0.07)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {children}
                  </motion.h2>
                );

              case "p":
                return (
                  <motion.p
                    variants={moveUp(0.07)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {children}
                  </motion.p>
                );

              case "ul":
                return (
                  <motion.ul
                    variants={moveUp(0.07)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {children}
                  </motion.ul>
                );

              case "img":
                imgIndex++;
                const src = domNode.attribs.src;
                if (!src) return null;

                return (
                  <motion.div
                    variants={moveUp(0.07)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <img src={src} alt={domNode.attribs.alt || "blog image"} data-first={imgIndex === 1 ? "true" : "false"} />
                  </motion.div>
                );

              default:
                return undefined;
            }
          }
        },
      })}
    </article>
  );
};

export default BlogContent;
