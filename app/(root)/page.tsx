import React from 'react'
import SearchForm from '@/components/SearchForm'
import StartupCard from '@/components/StartupCart';


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      auther: { _id:1, name: 'ali'},
      views: 56,
      _id: 2,
      description: 'nothing going on',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnY5NGSUOgaLWAblJ3l8BxZVxr7GgYYYjHzg&s',
      catagory: 'Food',
      title: 'coffe shop'
    },
    {
      _createdAt: new Date(),
      auther: { _id:1, name: 'ali'},
      views: 1,
      _id: 1,
      description: 'nothing going on',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnY5NGSUOgaLWAblJ3l8BxZVxr7GgYYYjHzg&s',
      catagory: 'Food',
      title: 'coffe shop'
    },
    {
      _createdAt: new Date(),
      auther: { _id:1, name: 'ali'},
      views: 58,
      _id: 3,
      description: 'nothing going on',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnY5NGSUOgaLWAblJ3l8BxZVxr7GgYYYjHzg&s',
      catagory: 'Food',
      title: 'coffe shop'
    }
  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search result for (${query})` : "All Startup"}
        </p>

        <ul className='mt-7 card_grid'>

          {posts?.length > 0 ?(
            posts.map((post: StartupCardType) => (
             <StartupCard key={post._id} post={post}/>
            ))) : 
            (<p className='no-result'>no Start ups find ?</p>)}
          
        </ul>

      </section>
    </>
  )
}
