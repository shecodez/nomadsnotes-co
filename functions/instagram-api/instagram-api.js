require("dotenv").config();

const handler = async (event) => {
  const endpoint = "https://graph.instagram.com";
  const userId = process.env.INSTAGRAM_USER_ID;
  const fields = "id,caption,media_url,permalink";
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const limit = 6;
  const instagramApiUrl = `${endpoint}/${userId}/media/?fields=${fields}&access_token=${token}&count=${limit}`;

  try {
    const rawResponse = await fetch(instagramApiUrl, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    // Throw an error if the response was not successful
    if (!rawResponse.ok) throw new Error(rawResponse.statusText);

    const content = await rawResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(
        content.data.map((i) => ({
          id: i.id,
          url: i.media_url,
          caption: i.caption,
        }))
      ),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
