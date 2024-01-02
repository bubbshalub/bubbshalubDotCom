export default function CommissionTypeForm() {
  return (
    <div>
      <h4> type of commission </h4>
      <p className="text-gray-500">
        please select the one that most directly applys
      </p>
      <br />
      <form>
        <input type="radio" name="commType" value="animation" />
        <label for="illustration_vector">
          {" "}
          animation
          <p className="text-gray-500">
            story, meme, and the like, regardless of medium
          </p>
        </label>
        <input type="radio" name="commType" value="character_design" />
        <label for="illustration_vector">
          character_design{" "}
          <p className="text-gray-500">
            help designing a character from scratch
          </p>
        </label>
        <input type="radio" name="commType" value="illustration_raster" />
        <label for="illustration_raster">
          illustration_raster
          <p className="text-gray-500">
            an illustration based on pixels. this allows for much more fine
            details at the cost of a finite resolution.
            <br />
            <a
              className="text-blue-800"
              href="https://www.customink.com/assets/site_content/pages/help_center/rastervector-c040dfc2ab9c1d02e95792b8c14fe64e819f207363c690d51027a79c6a728be4.gif"
            >
              {" "}
              for an example click here
            </a>
          </p>
        </label>
        <input type="radio" name="commType" value="illustration_vector" />
        <label for="illustration_vector">
          {" "}
          illustration_vector
          <p className="text-gray-500">
            an illustration based on vectors. this allows for images with
            "infinate" resolution, at the sacrifice of unique details.
            <br />
            <a
              className="text-blue-800"
              href="https://www.customink.com/assets/site_content/pages/help_center/rastervector-c040dfc2ab9c1d02e95792b8c14fe64e819f207363c690d51027a79c6a728be4.gif"
            >
              {" "}
              for an example click here
            </a>
          </p>
        </label>
        <br />
        <br />
      </form>
    </div>
  );
}
