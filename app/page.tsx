import React from 'react'
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

export default function HomePage() {

    const foodRecipe = {
        "idMeal": "52947",
        "strMeal": "Ma Po Tofu",
        "strMealAlternate": null,
        "strCategory": "Beef",
        "strArea": "Chinese",
        "strInstructions": "Add a small pinch of salt and sesame oil to minced beef. Mix well and set aside.\r\nMix 1 tablespoon of cornstarch with 2 and ½ tablespoons of water in a small bowl to make water starch.\r\nCut tofu into square cubes (around 2cms). Bring a large amount of water to a boil and then add a pinch of salt. Slide the tofu in and cook for 1 minute. Move out and drain.\r\nGet a wok and heat up around 2 tablespoons of oil, fry the minced meat until crispy. Transfer out beef out and leave the oil in.\r\nFry doubanjiang for 1 minute over slow fire and then add garlic, scallion white, ginger and fermented black beans to cook for 30 seconds until aroma. Then mix pepper flakes in.\r\nAdd water to the seasonings and bring to boil over high fire. Gently slide the tofu cubes. Add light soy sauce and beef.Slow the heat after boiling and then simmer for 6-8 minutes. Then add chopped garlic greens.\r\nStir the water starch and then pour half of the mixture to the simmering pot. Wait for around 30 seconds and then pour the other half. You can slightly taste the tofu and add pinch of salt if not salty enough. By the way, if you feel it is too spicy, add some sugar can milder the taste. But be carefully as the broth is very hot at this point.\r\nTransfer out when almost all the seasonings stick to tofu cubes. Sprinkle Szechuan peppercorn powder (to taste)and chopped garlic greens if using.\r\nServe immediately with steamed rice.",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/1525874812.jpg",
        "strTags": null,
        "strYoutube": "https://www.youtube.com/watch?v=IhwPQL9dFYc",
        "strIngredient1": "Tofu",
        "strIngredient2": "Minced Beef",
        "strIngredient3": "Sesame Seed Oil",
        "strIngredient4": "Doubanjiang",
        "strIngredient5": "Fermented Black Beans",
        "strIngredient6": "Pepper",
        "strIngredient7": "Salt",
        "strIngredient8": "Sichuan pepper",
        "strIngredient9": "Soy Sauce",
        "strIngredient10": "Water",
        "strIngredient11": "Olive Oil",
        "strIngredient12": "Scallions",
        "strIngredient13": "Spring Onions",
        "strIngredient14": "Garlic",
        "strIngredient15": "Ginger",
        "strIngredient16": "Water",
        "strIngredient17": "Cornstarch",
        "strIngredient18": "",
        "strIngredient19": "",
      "strIngredient20": "",
        "strIngredient21": "Vegetable Stock",
"strIngredient22": "Shaoxing Wine",
"strIngredient23": "White Sugar",
"strIngredient24": "Chili Oil",
"strIngredient25": "Black Vinegar",
"strIngredient26": "Ground Pork",
"strIngredient27": "Douban Sauce",
"strIngredient28": "Chili Flakes",
"strIngredient29": "Corn Oil",
"strIngredient30": "Rice Wine",
"strIngredient31": "Toasted Sesame Seeds",
"strIngredient32": "Green Onions",
"strIngredient33": "Chili Paste",
"strIngredient34": "Chicken Broth",
"strIngredient35": "MSG (optional)",
"strIngredient36": "Peanut Oil",
"strIngredient37": "Brown Sugar",
"strIngredient38": "Red Chili Peppers",
"strIngredient39": "Black Pepper",
"strIngredient40": "Sea Salt",
        "strMeasure1": "450g",
        "strMeasure2": "100g ",
        "strMeasure3": "1/2 tbs",
        "strMeasure4": "1 1/2 tsp ",
        "strMeasure5": "1/2 tsp",
        "strMeasure6": "1 tbs",
        "strMeasure7": "1/2 tsp",
        "strMeasure8": "1/2 tsp",
        "strMeasure9": "1 tbs",
        "strMeasure10": "400ml",
        "strMeasure11": "2 tbs",
        "strMeasure12": "2 chopped",
        "strMeasure13": "4",
        "strMeasure14": "2 cloves chopped",
        "strMeasure15": "4 sliced",
        "strMeasure16": "2 1/2 tbs",
        "strMeasure17": "1 tbs",
        "strMeasure18": "",
        "strMeasure19": "",
        "strMeasure20": "",
        "strSource": "https://www.chinasichuanfood.com/mapo-tofu-recipe/",
        "strImageSource": null,
        "strCreativeCommonsConfirmed": null,
        "dateModified": null
    }
        
  return (
    <div className='bg-violet-800 min-h-screen min-w-full'>
        <main>
            <div className='flex flex-col p-6 pl-8'>
                <p className='font-bold text-4xl text-shadow-fuchsia-500 text-white'>
                    Recipe Tour
                </p>
                <Card className='max-w-[70%] ml-[15%]'>
                  <CardHeader>
                    <CardTitle>
                        <div className='flex flex-row gap-5 items-center'>
                            <div className="flex flex-col gap-2">
                                <p className='text-2xl'>Name</p>
                                <p className='text-lg text-gray-500'>{foodRecipe.strMeal}</p>
                            </div> 
                            <p>|<br></br>|</p>
                            <div className="flex flex-col gap-2">
                                <p className='text-2xl'>Category</p>
                                <p className='text-lg text-gray-500'>{foodRecipe.strCategory}</p>
                            </div> 
                            <p>|<br></br>|</p>
                            <div className="flex flex-col gap-2">
                                <p className='text-2xl'>Origin</p>
                                <p className='text-lg text-gray-500'>{foodRecipe.strArea}</p>
                            </div> 
                        </div>
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-row gap-3 border rounded-xl h-[600px]">
                      <div className='w-1/2 aspect-4/3 rounded-l-2xl relative overflow-clip'>
                        <Image
                          src={foodRecipe.strMealThumb}
                          alt='Recipe capture'
                          fill={true}
                        />
                      </div>
                      <div className='p-2 pb-1 w-1/2'>
                          <p className='text-4xl pb-4'>
                              <strong>Ingredients</strong>
                          </p>
                          <ScrollArea className='h-[90%]'>
                            <ol className='list-inside list-[upper-roman] space-y-2'>
                              {Object.entries(foodRecipe)
                                  .filter(([Key, value]) => {
                                    const isIngredient = Key.startsWith("strIngredient");
                                    const isNotEmpty = value?.trim().length;
                                    
                                      return isIngredient && isNotEmpty ;
                                  })
                          .map(([key, value]) => {
                                    const ingredientId = key.substring(13)
                                    
                                  return (
                                    <li key={key} className='text-2xl'>
                                      {value}
                                    </li>
                                  )
                              })}
                            </ol>
                          </ScrollArea>
                      </div>
                    </div>
            </CardContent>
            <CardFooter>
              <Card className='w-full'>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <p className='text-4xl'>
                          <strong>Preparation steps</strong>
                        </p>
                      </AccordionTrigger>
                      <AccordionContent>
                        <pre className='whitespace-pre-wrap'>
                        {foodRecipe.strInstructions}
                        </pre>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </CardFooter>
           
            </Card>
            </div>
        </main>
    </div>
  )
}
