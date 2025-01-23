"use client";

import { store } from "./index";
import { Provider } from "react-redux";

interface Props {
    children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
    return <Provider store={store}>{children}</Provider>;
}
