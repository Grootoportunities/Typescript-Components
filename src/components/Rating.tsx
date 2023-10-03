type RatingPropsType = {
  value: number;
};

export function Rating(props: RatingPropsType) {
  console.log("Rating rendering");

  switch (props.value) {
    case 1:
      return (
        <div>
          <Star selected={true} />
          <Star selected={false} />
          <Star selected={false} />
          <Star selected={false} />
          <Star selected={false} />
        </div>
      );

    case 2:
      return (
        <div>
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={false} />
          <Star selected={false} />
          <Star selected={false} />
        </div>
      );

    case 3:
      return (
        <div>
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={false} />
          <Star selected={false} />
        </div>
      );

    case 4:
      return (
        <div>
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={false} />
        </div>
      );

    case 5:
      return (
        <div>
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
        </div>
      );

    default:
      return (
        <div>
          <Star selected={false} />
          <Star selected={false} />
          <Star selected={false} />
          <Star selected={false} />
          <Star selected={false} />
        </div>
      );
  }
}

type StarPropsType = {
  selected: boolean;
};

function Star(props: StarPropsType) {
  console.log("Star rendering");

  if (props.selected === true) {
    return (
      <span>
        <b>* </b>
      </span>
    );
  } else {
    return <span>* </span>;
  }
}
