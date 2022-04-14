import React from "react";
import breakFast1 from "../../../../assets/images/breakfast/breakfast1.png";
import breakFast2 from "../../../../assets/images/breakfast/breakfast2.png";
import breakFast3 from "../../../../assets/images/breakfast/breakfast3.png";
import breakFast4 from "../../../../assets/images/breakfast/breakfast4.png";
import breakFast5 from "../../../../assets/images/breakfast/breakfast5.png";
import breakFast6 from "../../../../assets/images/breakfast/breakfast6.png";
import Meal from "./Meal/Meal";

const Meals = () => {
    const meals = [
        { name: "BreakFast1", id: 1, img: breakFast1 },
        { name: "BreakFast2", id: 2, img: breakFast2 },
        { name: "BreakFast3", id: 3, img: breakFast3 },
        { name: "BreakFast4", id: 4, img: breakFast4 },
        { name: "BreakFast5", id: 5, img: breakFast5 },
        { name: "BreakFast6", id: 6, img: breakFast6 },
    ];

    return (
        <div>
            <h2 className="text-3xl text-center my-8">Meal Item</h2>
            <div className="grid grid-cols-3 w-4/5 mx-auto place-items-center">
                {meals.map((meal) => (
                    <Meal meal={meal} key={meal.id}></Meal>
                ))}
            </div>
        </div>
    );
};

export default Meals;
