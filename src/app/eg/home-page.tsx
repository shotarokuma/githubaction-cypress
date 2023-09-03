'use client'


export type Info = {
  id: number;
  title: string
}

export type HomePageProps = {
  recentPosts: Info[]
};
 
const  HomePage :React.FC<HomePageProps> = ({recentPosts}) =>  {
  return (
    <div>
      {recentPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default HomePage;