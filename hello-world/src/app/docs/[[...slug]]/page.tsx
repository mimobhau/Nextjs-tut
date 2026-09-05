export default async function Docs(
    {
        params,
    }: {
        params: Promise<{slug: string[]}>;
    }
) {
    const {slug} = await params;
    if(slug?.length === 2) {
        return (
            <h1>
                Viewing docs for feature {slug[0]} and concept {slug[1]}
            </h1>
        );
    }
    else if(slug?.length === 1) {
        return <h1>Viewing docs for feature {slug[0]}</h1>;
    }
    return <h1>Docs Home page</h1>;
}
/**
1. this code snippet stores the params/url in **string array**
2. if there is only *1 element* after the parent folder name (here, docs) seperated by a "/", it will execute the "else if" section
   - url - ***localhost:3000/docs/element1***
   - outcome - ***Viewing docs for feature element1***
3. if there is are *2 elements* after the parent folder name seperated by two "/", it will execute the "if" section
   - url - ***localhost:3000/docs/element1/element2***
   - outcome - ***Viewing docs for feature element1 and concept element2***
 */