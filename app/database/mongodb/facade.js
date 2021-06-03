class Facade {
  constructor(model) {
    this.Model = model;
  }

  async create(body) {
    const model = new this.Model(body);
    return await model.save();
  }

  async findById(args) {
    return await this.Model.findById(args).exec();
  }

  async update(condition, dataToUpdate, options = { new: true, rawResult: true }) {
    return await this.Model.findOneAndUpdate(condition, dataToUpdate, options).exec();
  }

  async remove(condition, options = { rawResult: true }) {
    return await this.Model.findOneAndRemove(condition, options).exec();
  }
}

module.exports = Facade;
