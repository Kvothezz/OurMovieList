namespace OurMovieList.Models
{
    public interface IMovieRepository
    {
        void Add(MovieModel movie);

        List<MovieModel> Get();
    }
}
