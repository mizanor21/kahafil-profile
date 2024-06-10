import event1 from "../../../assets/images/events/event1.jpg";
import event2 from "../../../assets/images/events/event2.jpg";
import event3 from "../../../assets/images/events/event3.jpg";
const Events = () => {
  return (
    <div className="container mx-auto my-20 ">
      <h2 className="text-3xl font-serif mb-5 border-l-4 pl-3 border-green-600">
        Events & Activities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="card lg:max-w-lg bg-base-100 rounded-none border">
          <figure>
            <img src={event1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              adipisci praesentium tempore nostrum tempora facilis alias,
              inventore dicta? Beatae eligendi, repudiandae recusandae accusamus
              ea eaque assumenda inventore enim magnam nulla!
            </p>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 rounded-none border">
          <figure>
            <img src={event2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              adipisci praesentium tempore nostrum tempora facilis alias,
              inventore dicta? Beatae eligendi, repudiandae recusandae accusamus
              ea eaque assumenda inventore enim magnam nulla!
            </p>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 rounded-none border">
          <figure>
            <img src={event3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              adipisci praesentium tempore nostrum tempora facilis alias,
              inventore dicta? Beatae eligendi, repudiandae recusandae accusamus
              ea eaque assumenda inventore enim magnam nulla!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
