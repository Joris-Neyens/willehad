import { useState } from "react";

export default function EditCourse({ id, title, cover }) {

    const url = cover.url

    const [name, setName] = useState({ title })

    return (
        <form>
            <input/>
            <p>{title}</p>
            <p>{cover.url}</p>
        </form>
        
    )

    
}

 