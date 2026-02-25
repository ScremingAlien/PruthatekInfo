"use client"
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useEffect } from "react";

export default function Editor({ setEditorContent, initialContent }) {

     useEffect(() => {
          if (typeof window === "undefined") return;

          const editor = new EditorJS({
               holder: 'editorjs',
               tools: {
                    header: {
                         class: Header,
                         inlineToolbar: true,
                         config: {
                              levels: [1, 2, 3],
                              defaultLevel: 3
                         }
                    },
                    list: {
                         class: List,
                         inlineToolbar: true
                    },
               },
               data: initialContent,
               placeholder: 'Let’s write an awesome story!',
               onChange: async () => {
                    const content = await editor.save();
                    setEditorContent(content); // Update parent state
               }
          });

          return () => {
               editor.destroy; // Cleanup
          };
     }, [setEditorContent]);


     // ===================================================
     // let editorID = document.getElementById('editorjs');

     // if (editorID == null || window == undefined) { }
     // const editor = new EditorJS({
     //      holder: 'editorjs',

     //      tools: {
     //           header: {
     //                class: Header,
     //                inlineToolbar: true,
     //                config: {
     //                     levels: [1, 2, 3],
     //                     defaultLevel: 2
     //                }
     //           },
     //           list: {
     //                class: List,
     //                inlineToolbar: true
     //           },
     //      },
     //      placeholder: 'Let`s write an awesome story!',
     //      onReady: () => {
     //           console.log('Editor.js is ready to work!')
     //      },
     //      onChange: (data) => {
     //           console.log(data.blocks)
     //      }
     // });


     return (
          <>
               {/* <button className="" onClick={() => {
                         editor.save().then((outputData) => {
                              console.log('Article data: ', outputData)
                         }).catch((error) => {
                              console.log('Saving failed: ', error)
                         });
                    }}>Save</button> */}
               <div id='editorjs' className=" h-full w-full" >
               </div>
          </>

     )
}
