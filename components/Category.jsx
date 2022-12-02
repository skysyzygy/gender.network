import Image from 'next/image'
import React, {useState} from 'react'
import Categories from './Categories'

const Category = (properties) => {

    const [data, setData] = useState(Categories);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        Filter by Category:
                        <br>
                        </br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button>All</button>
                        <div>Test Tags</div>
                        <button>Test1</button>
                        <button>Test2</button>

                    </div>
                </div>
                <div className="col">
                    <div className="cards">
                    {properties.map(post => (
                                   <div className="aboutshow" key={post._id}>
                                    {post.title}
                                    </div>
                    ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category

export async function getServerSideProps() {
    const query = '*[_type =="work"]{title, tags}';  
    const properties = await sanityClient.fetch(query);


    if (!properties.length) {
      return {
        props: {
          properties: [],
        },
      }
    } else {
      return {
        props: {
          properties,
          tagproperties
        },
      }
    }
  }
