using System.Net.Http;



namespace OurMovieList.Services
{
    public class MovieService
    {
       public HttpClient client =  new HttpClient();

        public Uri RequestUri = new Uri("https://api.themoviedb.org/3/search/movie?include_adult=false&language=pt-Br&page=1");

    }
}
