import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { GeneralBanner } from '../../components';
import { BlogLayout, BlogSidebar, FiltersTree, BlogMainContent, SinglePost } from './sections';


const post = {
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/1200px-Louvre_Museum_Wikimedia_Commons.jpg",
  tags: ["Art ", "Technology ", "Fashion "],
  date: "21.03.2023",
  title: "Cartridge Is Better Than Ever",
  content: "Everyone who is new to React is confused by React props, because they are never mentioned in any other framework, and rarely explained on their own. They are one of the early things you will learn in React after grasping React's JSX syntax. Essentially React component props are used to pass data from component to component. In this tutorial, I want to explain props in React in greater detail by going step by step through React props examples.",
  likes: 5,
  dislikes: 1,
  comments: 6,
};

const filters = {
  "Période": {
    "Entre": null,
    "et": null
  },
  "Collection": {
    "Département des Antiquités égyptiennes": 306,
    "Département des Antiquités grecques, étrusques et romaines": 5,
    "Département des Antiquités orientales": 0,
    "Département des Arts de l'Islam": 221,
    "Département des Arts graphiques": 0,
    "Département des Objets d'art du Moyen Age, de la Renaissance et des temps modernes": 779,
    "Département des Peintures": 0,
    "Département des Sculptures du Moyen Age, de la Renaissance et des temps modernes": 0,
    "Sculptures des jardins": 0,
    "Service de l'Histoire du Louvre": 30,
    "Musée national Eugène-Delacroix": 0,
    "Musées Nationaux Récupération": 257
  },
  "Catégorie": {
    "Peintures": 10623,
    "Sculptures": 38224,
    "Meubles": 3364,
    "Dessins & Gravures": 232466,
    "Textiles": 5551,
    "Bijoux & Parures": 18677,
    "Ecriture & Inscriptions": 20638,
    "Objets": 114510
  },
  "Exposé actuellement": {
    "Musée du Louvre": 203,
    "Louvre-Lens": 1,
    "Musée National Eugène Delacroix": 0,
    "Autres localisations": 287
  },
  "Artiste": {
    "Anonyme": 212,
    "Manufacture des Gobelins": 126,
    "Flandres Bruxelles": 51,
    "Manufacture de la Savonnerie": 40,
    "Manufacture de Beauvais": 33,
    "Manufacture d'Aubusson": 32,
    "Flandres": 30,
    "France Île-de-France Paris": 29,
    "Van Orley, Bernard": 24,
    "de Luz, Claude": 17
  }
};

function BlogPage() {
  const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

  return (
    <div>
      <GeneralBanner />
      <BlogLayout>
        <BlogSidebar>
          <Stack tokens={stackTokens}>
            <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />
          </Stack>
          <FiltersTree filters={filters} />
        </BlogSidebar>
        <BlogMainContent>
          <SinglePost postData={post} />
          <SinglePost postData={post} />
          <SinglePost postData={post} />
        </BlogMainContent>
      </BlogLayout>
    </div>
  );
}

export default BlogPage;