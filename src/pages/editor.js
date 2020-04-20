import * as React from 'react'
import MarkdownIt from 'markdown-it'
import Layout from '@theme/Layout';
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import styles from 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({html, text}) {    
  console.log('handleEditorChange', html, text)
}

function Editor() {
    return (
        <Layout title="Editor">

            <div style={{
                padding:"60px",
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                }}>

                    <MdEditor
                        style={{
                            minHeight: "500px"
                        }}
                        value=""
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={handleEditorChange}
                    />
            </div>

        
      </Layout>
    );
  }
  
  export default Editor;