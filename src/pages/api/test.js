export async function GET(req, res) {
    return new Response(JSON.stringify({ hello: "world" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });

}