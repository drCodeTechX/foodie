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
                <p className='font-bold text-2xl text-shadow-fuchsia-500 text-white'>
                    Recipe Tour
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle>
                        <div className='flex flex-row gap-5 items-center bg-red-50'>
                            <div className="flex flex-col gap-2">
                                <p>Name</p>
                                <p className='text-gray-500'>{foodRecipe.strMeal}</p>
                            </div> 
                            <p>|<br></br>|</p>
                            <div className="flex flex-col gap-2">
                                <p>Category</p>
                                <p className='text-gray-500'>{foodRecipe.strCategory}</p>
                            </div> 
                            <p>|<br></br>|</p>
                            <div className="flex flex-col gap-2">
                                <p>Origin</p>
                                <p className='text-gray-500'>{foodRecipe.strArea}</p>
                            </div> 
                        </div>
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-row gap-3 border rounded-xl">
                      <div className='min-w-[50%] min-h-full bg-yellow-500 rounded-l-2xl relative overflow-clip'>
                        <Image
                          src={foodRecipe.strMealThumb}
                          alt='Recipe capture'
                          fill={true}
                        />
                      </div>
                      <div className='p-2 pb-1'>
                          <p>
                              <strong>Ingredients</strong>
                          </p>
                          <ScrollArea className='w-full h-[95%]'>
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
                                      <li key={key}>
                                      {value}
                                      {ingredientId}
                                      </li>
                                  )
                              })}
                            </ol>
                          </ScrollArea>
                      </div>
                    </div>
            </CardContent>
            <CardFooter>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Preparation steps</AccordionTrigger>
                  <AccordionContent>
                    {foodRecipe.strInstructions}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardFooter>
           
                </Card>
            </div>
        </main>
    </div>
  )
}
