var frameModule = require("ui/frame");
var observable = require("data/observable").Observable;

var beerList = [
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        }
    ];

var beerListViewModel = new observable({
  filter_string: '',
  onItemTap: onItemTap,
  beerList: []
});

beerListViewModel.addEventListener(observable.propertyChangeEvent, function (pcd) {
  if(pcd.propertyName == 'filter_string'){
      updateList();
    }
});

function updateList(){
  console.log('updateList');
  beerListViewModel.beerList=[];
  for(var i in beerList){
     if(beerList[i].name.indexOf(beerListViewModel.filter_string) > -1){
       beerListViewModel.beerList.push(beerList[i]);
     }
  }
}

function onItemTap(args) {
//  var gridLayout = args.object;
//  var id = gridLayout.id;
  console.log('item tapped');
//  var navigationEntry = {
//          moduleName: "./beer-details-page",
//          context: {
//            selectedId: id
//          },
//          animated: true,
//          navigationTransition: {
//              transition: "flip ",
//          }
//      };
//
//      var topmost = frameModule.topmost();
//      topmost.navigate(navigationEntry);
};

updateList();
exports.onItemTap = onItemTap;
exports.beerListViewModel = beerListViewModel;