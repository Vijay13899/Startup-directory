import {defineQuery} from "groq";

export const STARTUPS_QUERY = defineQuery(`*[_type=="startup" && defined(slug.current)] 
  | order(_createdAt){
  _id,
    title,
    slug,
    _createdAt,
    views,
    author->{_id,name,image,bio},
    description,
    category,
    image,
}`)