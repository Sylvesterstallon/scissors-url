export enum selectedPage {
    MyURLs = "my urls",
    Features = "features",
    Pricing = "Pricing",
    Analytics = "analytics",
    FAQS = "faqs",
}

export type user = {
    username: string;
    email: string;
    password: string;
}
export type Context = {
    // signup: () => void;
    // signup: (email: string, password: string) => promise<void>;
    // login: () => void;
    user: user;

}

export default selectedPage;