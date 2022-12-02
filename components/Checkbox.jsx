export default function Checkbox({label, id, getSelectedTags}) {
    return (
<label className="">
    <input type="checkbox" value={id} onChange={e=> getSelectedTags(id)}/><span>{label}</span>
</label>
  
    );
  }