using System.Net.Http.Headers;

namespace OurMovieList.Services
{
    public class tmdbApiService
    {

        public HttpClient client = new HttpClient();
        private readonly IConfiguration configuration;
        public async Task<string> request()
        {
            var request = new HttpRequestMessage()
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri("https://api.themoviedb.org/3/authentication"),
                Headers = {
            {"accept","application/json"},
            // {"Authorization","authkey" }
            },
            };

            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                                Console.WriteLine(body);

                return body;
            }
        }
    }
}