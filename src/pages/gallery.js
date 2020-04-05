import React from 'react';
import Layout from '@theme/Layout';
import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},

{
        src: "https://storage.googleapis.com/www-cw-com-tw/article/201910/article-5da28f9373458.jpg",
        thumbnail: "https://storage.googleapis.com/www-cw-com-tw/article/201910/article-5da28f9373458.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 214
}
];

function Hello() {
  return (
    <Layout title="Gallery">

        <div style={{
            padding:"50px",
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '20px',
            }}>

            <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
                <Gallery images={IMAGES}
                
                enableLightbox={true}
                enableImageSelection={false}/>   
            </div>

            <p>edit <code>pages/gallery.js</code></p>
        </div>
      
    </Layout>
  );
}

export default Hello;