interface Video {
  id: number;
  title: string;
  views: number;
  author: string;
  description: string;
  date: string;
  youtubeLink: string;
}

export default async function newYearsResolutions({
  params,
}: {
  params: { id: string };
}) {
  const video = (await fetch(`http://localhost:3000/scripts/${params.id}`).then(
    (res) => {
      return res.json();
    },
  )) as Video;

  return (
    <div>
      <p> this is a dead page </p>
    </div>
  );
}
