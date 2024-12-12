import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}:{
    searchParams: Promise<{query?:string}>
}) {
    const query = (await searchParams).query;
    const posts = [
        {
            _createdAt: new Date(),
            _id:1,
            views: 55,
            author: {_id:1,name:"Vijay"},
            description:"Description",
            image:"https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category:"Robots",
            title:"We Robots"
        }
    ]
  return (
    <>
      <section className="pink_container">
          <h1 className="heading">
              Pitch your startup, <br/>
              Network with entrepreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
              Submit ideas, vote on pitches, and gain recognition through virtual competitions.
          </p>
          <SearchForm query={query} />
      </section>
        <section className="section_container">
            <p className="text-30-semibold">
                {query?`Search results for "${query}"`:"All Pitches"}
            </p>
            <ul className="mt-7 card_grid">
                {posts?.length>0?(
                    posts.map((post:StartupCardType) => (
                        <StartupCard key={post?._id} post={post} />
                    ))):(
                        <p className="no-results">No startups found!</p>
                )}
            </ul>
        </section>
    </>
  );
}
