import Header from "../components/Header"
import FilterHeader from "../components/FilterHeader"
import { sanityClient, urlFor } from '../sanity'
import {useRouter} from 'next/router'
import Select from 'react-select'
import {useQuery, useQueryClient} from 'react-query'
import {useState} from 'react'


const getWorks = async(key) => {
  console.log(key)

  const tagId = key.queryKey[1].tag["0"];
  // console.log(tagId)
  if(tagId){
    const query =`*[_type == "work" && "${tagId}" in tags[]._ref]`;
    // console.log(query);


    const properties = await sanityClient.fetch(query);
    // console.log(properties);


    return properties;


  }
  const query = '*[_type =="work"]{title, tags}';
    const properties = await sanityClient.fetch(query);
    return properties;
}



const anotherone = ({ properties, tagproperties }) => {
    // console.log(properties);
    // console.log(tagproperties);

    const {query} = useRouter();
    const queryClient = useQueryClient()
    const [tagId, setTagId] = useState(null)
    const {data, status} = useQuery(['properties', {tag: tagId}], getWorks, {initialData: properties})

    const handleTags = values => {
      // console.log(values)
    }


    return (
      <div className="indexPage">
              <Header/>
              <FilterHeader/>


              Filters go here:<br>
              </br>
              <Select 
              getOptionLabel={option => `${option.title}`}
              getOptionValue={option => option._id}
              options={tagproperties}
              instanceId="mytags"
              isMulti
              placeholder="filter by tags"
              
              onChange={values => setTagId(values.map(tag => tag._id))}
              />

              {data.map(post => (
                <div key={post._id}>
                  {post.title}
                </div>

              
         

            ))
            }
      
    </div>

    )
  }

  export async function getServerSideProps() {
    const query = '*[_type =="work"]{title, tags}';  
    const properties = await sanityClient.fetch(query);

    const tagquery = '*[_type =="tagsdoc"]';
    const tagproperties = await sanityClient.fetch(tagquery);

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


  export default anotherone