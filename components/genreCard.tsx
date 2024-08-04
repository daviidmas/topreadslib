'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation";

type GenreCardProps = {
    key: number;
    name: string;
    description: string;
}

export default function GenreCard(props: GenreCardProps ) {
    const {key:id, name, description} = props
    
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const {replace} = useRouter()

    
    const handleChange = (term: string, isChecked: boolean) => {
        const params = new URLSearchParams(searchParams)

        // Get existing genres from the URL
        const existingGenres = params.getAll('genre');

        if (isChecked) {
            // Add the new genre if not already present
            if (!existingGenres.includes(term)) {
                existingGenres.push(term);
            }
        } else {
            // Remove the genre
            const index = existingGenres.indexOf(term);
            if (index > -1) {
                existingGenres.splice(index, 1);
            }
        }

        // Clear the genre parameter and set updated genres
        params.delete('genre');
        existingGenres.forEach(genre => params.append('genre', genre));

        replace(`${pathName}?${params.toString()}`)
    }

    return(
        <div key={id} className="p-1">
            <label htmlFor={`genre-${id}`}>{name}</label>
            <input 
                onChange={(e) => handleChange(name, e.target.checked)}
                type="checkbox" 
                className="ml-3" 
                id={`genre-${id}`} 
            />
        </div>
    )
}