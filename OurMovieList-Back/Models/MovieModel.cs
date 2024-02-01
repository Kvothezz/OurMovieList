namespace OurMovieList.Models
{
    public class MovieModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string OriginalTitle { get; set; }

        public string PosterPath { get; set; }

        public MovieModel(int id , string title, string description, string originalTitle, string posterPath)
        {
            Id = id;
            Title = title;
            Description = description;
            OriginalTitle = originalTitle;
            PosterPath = posterPath;
        }

    }

}
