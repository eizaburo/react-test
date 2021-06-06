module.exports = async (context, req) => {
    //req
    console.log(req);
    //res
    context.res = {
        body: {
            text: "Response from sample API",
        }
    }
}