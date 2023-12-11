import TopicsList from "@/components/TopicsList";

const Home = () => {

  console.log("TEST PRINT", process.env.MONGODB_URI)


  return (
    <>
      <TopicsList />
    </>
  );
};

export default Home;
