const { FormService } = require("../services");

//crete Form
const CreateForm = async (req, res) => {
  try {
    const reqBody = req.body;

    const Category = await FormService.FindCategory(reqBody.Category);
    if (Category) {
      throw new Error(
        "Category Already Created By this Name (" +
          Category.category +
          ") Please Create By this unother Category..!"
      );
    }
    let Form = await FormService.CreateForm(reqBody);
    if (!Form) {
      throw new Error(" Category Not Created , Please Try  Again Later");
    }

    res.status(200).json({
      success: true,
      message: " SuccessFully  Category Created ..!",
      data: Form,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//Form List
const FormList = async (req, res) => {
  try {
    const List = await FormService.FormList(req, res);
    res.status(200).json({
      success: true,
      message: " Form Data SuccessFully List Get !.....",
      data: List,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// find Id
const FormId = async (req, res) => {
  try {
    const formId = req.params.formId;
    const ID = await FormService.formId(formId);
    if (!ID) {
      throw new Error("Form Not Found !...");
    }
    res.status(200).json({
      success: true,
      message: "Suucessfully Form List Get!....",
      data: ID,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//delete Form
const DeleteForm = async (req, res) => {
  try {
    const formId = req.params.formId;
    const ID = await FormService.formId(formId);
    if (!ID) {
      throw new Error("Form Not Found !...");
    }
    await FormService.DeleteForm(formId);
    res.status(200).json({
      success: true,
      message: "Suucessfully Form Data Deleted!....",
      data: ID,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


// Searching form
const Searchform = async (req, res) => {
  try {
    const { title } = req.query;

    if (!title) {
      return res.status(400).json({
        message: " search parameter is required",
      });
    }

    const result = await FormService.FormList();

    const foundBlogs = result.filter((blog) =>
      blog.title.toLowerCase().includes(title.toLowerCase())
    );

    if (foundBlogs.length === 0) {
      return res.status(404).json({ message: "No matching records found" });
    }
    res.status(200).json({
      success: true,
      message: "Form Data Serching successfully!",
      data: foundBlogs,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//Form Pagination
const FormPage = async (req, res) => {
  try {
    const size = 5;
    const page = req.params.pageno;
    const pages = parseInt(page);
    const Index = (pages - 1) * size;
    const endIndex = pages * size;
  

    const item = await FormService.FormList();
    const paginatedBlogs = item.slice(Index, endIndex);
      if (paginatedBlogs < 1) {
      return res
        .status(400)
        .json({ message: "Page number must be greater than or equal to 1" });
    }

    res.status(200).json({
      success: true,
      message: "Form Data Pagination successfully!",
      data: paginatedBlogs,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  CreateForm,
  FormList,
  FormId,
  DeleteForm,
  Searchform,
  FormPage
};
