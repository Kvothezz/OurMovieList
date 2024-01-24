namespace OurMovieList.Models
{
    public class MovieModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string OriginalTitle { get; set; }

        public string PosterPath { get; set; }

        public MovieModel(int Id , string Title, string Description, string OriginalTitle, string PosterPath)
        {
            this.Id = Id;
            this.Title = Title;
            this.Description = Description;
            this.OriginalTitle = OriginalTitle;
            this.PosterPath = PosterPath;
        }

    }

}
