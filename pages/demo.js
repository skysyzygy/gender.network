/**
 * @jest-environment jsdom
 */

 import React, {useState} from 'react'
 import { urlFor, sanityClient } from '../sanity'
 import Category from '../components/Category'

 
 
 const demo = ({ properties, properties1 }) => {

    const [data, setData] = useState(properties)

    const filterResult = (catItem) =>{
        const result = properties.filter((curDate) =>{
            return curDate.cateogy === catItem;
        })
        setData(result)
    }
   return (
    <div className="demo">
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
                        <button onClick={() => setData(properties1)}>All</button>
                        <div>Test Tags</div>
                        <button onClick={() => filterResult('Test1')}>Test1</button>
                        <button>Test2</button>

                    </div>
                </div>
                <div className="col">
                    <div className="cards">
                    {properties.map(post => (
                                   <div key={post._id}>
                                    {post.title}
                                    </div>
                    ))}

                    </div>
                </div>
            </div>
        </div>
   )
 
 }
 
 export const getServerSideProps = async () => {
   const query = `*[_type == "work" ]`
   const properties = await sanityClient.fetch(query)

   const query1 = `*[count((tagsall)[@ in ['Test1', 'Test2']]) ==2]   `
   const properties1 = await sanityClient.fetch(query)
 
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
       },
     }
   }
 }
 
 export default demo;