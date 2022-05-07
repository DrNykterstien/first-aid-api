const mongoose = require('mongoose');

const relatedFieldSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  fieldId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Field',
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

const procedureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

const fieldSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    banner: {
      type: String,
      required: true
    },
    procedures: {
      type: [procedureSchema],
      required: true
    },
    relatedFields: {
      type: [relatedFieldSchema],
      default: []
    },
    faqs: {
      type: [faqSchema],
      default: []
    },
    rank: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Field', fieldSchema);
