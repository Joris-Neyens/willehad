import { useEffect, useState } from "react";
import { useRouter} from "next/router";

export default function LocalStorage() {

    const router = useRouter();

    useEffect(() => {
     
        const user = localStorage.getItem("user");

        if (!user) {
            router.push("/admin")
        }
    }, []);

};
