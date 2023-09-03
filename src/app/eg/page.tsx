import HomePage, { Info } from "./home-page";


const myPosts: Info[] = [
  {
    id: 123,
    title: "cypress is fun"
  },
  {
    id: 123,
    title: "Github action is fun"
  }
];

const Page: React.FC = () => {
  return <HomePage recentPosts={myPosts} />
};


export default Page;