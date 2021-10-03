export async function get({ params }) {
	const { slug } = params;
	console.log(`./pages/${slug}.{md,svx}`);
    const imports = import.meta.glob(`./pages/${slug}.{md,svx}`);
    let body = [];

    for (const path in imports) {
        body.push(
            imports[path]().then(({ metadata }) => {
                return metadata;
            })
        );
    }

    const posts = await Promise.all(body);

    return {
        body: JSON.stringify(posts[0])
    }
}