using Microsoft.AspNetCore.Mvc;

namespace DELTARUNESaveReader.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
