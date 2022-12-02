import Checkbox from "./Checkbox";


export default function Filters({ tags, getSelectedTags }) {
    return (
        
        <div>
             {tags.map(tag => <Checkbox
                key={tag._id}
                label={tag.title}
                id={tag._id}
                getSelectedTags={getSelectedTags}
            />)}
           
                {/* <Checkbox 
                key={id} 
                label={title}
                id={id}
                getSelectedTags={getSelectedTags} /> */}

        </div>
    );
}