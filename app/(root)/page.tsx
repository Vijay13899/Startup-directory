import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupCardType} from "@/components/StartupCard";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";

export default async function Home({searchParams}:{
    searchParams: Promise<{query?:string}>
}) {
    const query = (await searchParams).query;
    const params = {search:query || null};
    const {data:posts} = await sanityFetch({query:STARTUPS_QUERY,params})
  return (
    <>
      <section className="pink_container">
          <h1 className="heading">INNOVATORS HUB <br/> Startup directory </h1>
          <h3 className="sub-heading !max-w-3xl">
              Pitch your startup, <br/>
              Get new Ideas!
          </h3>
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
        <SanityLive/>
    </>
  );
}
