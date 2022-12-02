import Header from "../components/Header"
import FilterHeader from "../components/FilterHeader"
import { sanityClient, urlFor } from '../sanity'
import Select from 'react-select'
import { useQuery, useQueryClient } from 'react-query'
import Filters from "../components/Filters"
import {useEffect, useState} from 'react'



const getWorks = async (key) => {
    const query = '*[_type =="work"]{title, tags[]->, coverphoto}';
    const properties = await sanityClient.fetch(query);
    return properties;
}

const getTags = async (key) => {
    const tagquery = '*[_type =="tagsdoc"]';
    const tagproperties = await sanityClient.fetch(tagquery);
    return tagproperties;
}

const getHomepageFilteredWorks = async (tags) => {
    const filteredquery =`*[_type == 'work' && count((tags[]._ref)[@ in "${tags}"]) > 0]{title, tags[]->, coverphoto}`;
    const filteredproperties = await sanityClient.fetch(filteredquery);
    return filteredproperties;
}



async function handleFiltering({queryKey}){
    console.log(queryKey)
    const [_] = queryKey
    if (_.length){
        return await getHomepageFilteredWorks(queryKey[0])
    }
    return await getWorks()
}





const indexdemo = ({ properties, tagproperties, filteredproperties }) => {
    const [selectedTags, setSelectedTags] = useState([])
    const { data: works, isSuccess } = useQuery([selectedTags], handleFiltering)
    const { data: tags, isSuccess: tagsSuccess } = useQuery("tags", async () => await getTags())

    // console.log(works);
    // console.log(tagproperties);

    const getSelectedTags = (tag) => {
        // console.log(tag);
        if(selectedTags.includes(tag)){
            setSelectedTags(selectedTags.filter(item => item !== tag))
            return
        }
        setSelectedTags([...selectedTags, tag])

    }

    useEffect(() =>{

//         const range = [];
//         for (const i = 0; i < selectedTags.length; i ++ ) {
//             range.push(parseInt(selectedTags[i]));
//         }

// selectedTags = range;
console.log(selectedTags)
    },[selectedTags])

    return (
        <div>

{tagsSuccess && <Filters tags={tags} getSelectedTags={getSelectedTags} />
                
            }            
            {isSuccess && properties.map(work => (
                <div className="eventGrid" key={work._id}>
                    {work.title}
                </div>
            ))}
        </div>


    )
}

export async function getServerSideProps(tags) {
    const query = '*[_type =="work"]{title, tags[]->, coverphoto}';
    const properties = await sanityClient.fetch(query);

    const tagquery = '*[_type =="tagsdoc"]';
    const tagproperties = await sanityClient.fetch(tagquery);

    const filteredquery =`*[_type == 'work' && count((tags[]._ref)[@ in "${tags}"]) > 0]{title, tags[]->, coverphoto}`;
    const filteredproperties = await sanityClient.fetch(filteredquery);

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


export default indexdemo