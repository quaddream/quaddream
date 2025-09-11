"use client";

import React from "react";
import parse, { DOMNode, Element, domToReact } from "html-react-parser";
import { motion } from "framer-motion";
import { moveUp } from "@/app/components/motionVarients";

interface BlogContentProps {
  html: string;
}

const BlogContent = ({ html }: BlogContentProps) => {
  return (
    <article id="blogContent">
      {parse(html, {
        replace: (domNode: DOMNode) => {
          if ("name" in domNode) {
            const el = domNode as Element;
            const children = domToReact(el.children as unknown as DOMNode[]);

            switch (el.name) {
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
                const src = el.attribs.src;
                if (!src) return null;

                return (
                  <motion.div
                    variants={moveUp(0.07)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <img src={src} alt={el.attribs.alt || "blog image"} />
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
