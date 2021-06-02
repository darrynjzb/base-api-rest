class Facade {
  constructor(model) {
    this.Model = model;
  }

  async create(body) {
    const model = new this.Model(body);
    return await model.save();
  }

  async find(args) {
    return await this.Model.find(...args).exec();
  }

  async findOne(args) {
    return await this.Model.findOne(...args).exec();
  }

  async findById(args) {
    return await this.Model.findById(...args).exec();
  }

  async update(args) {
    return await this.Model.updateOne(...args).exec();
  }

  async remove(args) {
    return await this.Model.remove(...args).exec();
  }
}

module.exports = Facade;
