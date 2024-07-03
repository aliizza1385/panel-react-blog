import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  radiantLightTheme,
  radiantDarkTheme,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import { post_create } from "./Post/create_post";
import { list_post } from "./Post/list_post";
import { user_create } from "./User/create_user";
import { list_user } from "./User/list_user";
import { updata_Post } from "./Post/update_post";
import { tag_create } from "./Tags/create_tags";
import { category_create } from "./Category/create";
import { updata_user } from "./User/update_user";
import { list_comment } from "./Comment/list_comment";
import { updata_commet } from "./Comment/update";
import { tag_list } from "./Tags/tag_list";
import { categories_list } from "./Category/tag_list";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} theme={radiantLightTheme}darkTheme={radiantDarkTheme}>
    <Resource
      name="posts"
      list={list_post}
      create={post_create}
      edit={updata_Post}
      show={ShowGuesser}  
    />
    <Resource
      name="users"
      list={list_user}
      create={user_create}
      edit={updata_user}
      show={ShowGuesser}
    />
    <Resource
      name="category"
      list={categories_list}
      create={category_create}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="comments"
      list={list_comment}
      edit={updata_commet}
      show={ShowGuesser}
    />
    <Resource
      name="tags"
      list={tag_list}
      create={tag_create}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
