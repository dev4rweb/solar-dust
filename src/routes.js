import {
    HOME_PAGE,
    MINT_DETAIL_PAGE,
    MINTS_PAGE,
    RARITIES_PAGE,
    RARITY_DETAIL_PAGE,
    POST_DETAIL_PAGE,
    POSTS_PAGE,
} from "./utils/consts";
import HomePage from "./pages/HomePage/HomePage";
import MintsPage from "./pages/MintsPage/MintsPage";
import RaritiesPage from "./pages/RaritiesPage/RaritiesPage";
import RarityDetailPage from "./pages/RarityDetailPage/RarityDetailPage";
import MintDetailPage from "./pages/MintDetailPage/MintDetailPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import PostsPage from "./pages/PostsPage/PostsPage";

export const authRoutes = [

]

export const publicRoutes = [
    {
        path: HOME_PAGE,
        Component: HomePage
    },
    {
        path: MINTS_PAGE,
        Component: MintsPage
    },
    {
        path: RARITIES_PAGE,
        Component: RaritiesPage
    },
    {
        path: POSTS_PAGE,
        Component: PostsPage
    },
    {
        path: RARITY_DETAIL_PAGE + '/:prefix/:id',
        Component: RarityDetailPage
    },
    {
        path: MINT_DETAIL_PAGE + '/:prefix/:id',
        Component: MintDetailPage
    },
    {
        path: POST_DETAIL_PAGE + '/:id',
        Component: PostDetailPage
    },
]