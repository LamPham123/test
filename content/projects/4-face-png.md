---
title: Facial Age Classification
description: Deep learning-based age verification for legal thresholds using CNN architectures
date: 2024-06-01
author: Lam Pham
thumbnail: /images/facepng.png
isProject: true
pdfPaper: /images/FINAL_DL_PAPER.pdf
pdfPoster: /images/DeekshaSriyaLamFinalPoster.pdf
organization: Deep learning research project for CSE493
learnings:
  - title: Dataset Curation & The Imbalance Problem
    content: |
      Discovered that most public face datasets are completely unusable for our specific age ranges—teaching me that dataset quality matters more than model architecture.

      **The Initial Problem**
      - Started with UTK-Face dataset, seemed promising at first
      - But the age distribution was heavily skewed toward ages 0-1 and 25-60
      - Our critical bins (13-17, 18-20) were severely under-represented
      - Models could achieve high accuracy by just predicting the overrepresented bins

      **Our Solution**
      - Filtered IMDB-Wiki dataset (500k+ images) to focus on ages 1-25 only
      - Supplemented with UTK-Face images in our target age ranges
      - Created balanced dataset: 6k images per bin across four legal-age categories
      - Categories: 0-12, 13-17, 18-20, 21+ (aligned with U.S. legal thresholds)

      **Why Other Datasets Didn't Work**
      - AAF, Adience, AFAD, MORPH - all had severe under-representation of 9-25 age range
      - Noisy mislabeling (especially in IMDB-Wiki from celebrity photos)
      - Distribution bias toward older adults
      - Bin labels misaligned with our legal-age boundaries

      **What I Learned**
      - Dataset balance is critical for fine-grained classification
      - Can't just download a dataset and start training—need to inspect distributions
      - Even with 24k balanced images, data quality issues persisted
  - title: VGG Architecture Experiments & Overfitting
    content: |
      Tried three different CNN architectures of increasing complexity to see if depth would help—spoiler: it didn't. All models severely overfit.

      **The Three Models**
      - **Model 1 (3 layers)**: Simplest VGG-inspired CNN with 3 conv blocks
      - **Model 2 (9 layers)**: Deeper network with 9 conv blocks
      - **VGG-16**: Full VGG-16 architecture out of the box

      **Training Setup**
      - PyTorch with Adam optimizer (learning rate 1e-4 after tuning)
      - Batch size: 32
      - Loss: Softmax + Cross-entropy
      - 10 epochs (Model 1 trained for 30, but plateaued at 10)
      - No dropout initially (worried about mislabel noise preventing learning)

      **The Results (All Bad)**
      - Model 1: 90%+ training accuracy, 35.54% test accuracy
      - VGG-16: 90%+ training accuracy, 37.80% test accuracy
      - Model 2: 90%+ training accuracy, 15.66% test accuracy (completely collapsed!)

      **Per-Bin Breakdown**
      - All models performed best on 13-17 age bin (~50% accuracy)
      - Worst performance on 0-12 and 18-20 bins
      - Model 2 predicted ONLY 13-17 for everything (100% on that bin, 0% on others)

      **What Went Wrong**
      - Severe overfitting despite balanced data
      - Model 2 likely had vanishing gradients (no residual connections)
      - Training loss plateaued around 0.2, but test performance stayed terrible
      - Deeper models didn't help—possibly made it worse
  - title: Grad-CAM Analysis & What Models Actually Learned
    content: |
      Used Grad-CAM visualization to peek inside the models and see what they were actually learning—turns out, not facial features at all. This allowed us to see which parts of the image the model was using for predictions, to see where we were falling short.

      **What We Found**
      - **Model 1**: Random, scattered activation patterns—no clear focus
      - **Model 2**: Uniform activation across entire image (learning nothing useful)
      - **VGG-16**: Focused on clothing and background, NOT faces
      - Models were learning background artifacts instead of facial features
      - Clothing patterns, image backgrounds, and photo quality were driving predictions
      - Almost zero attention on actual facial characteristics (skin texture, facial structure)
      - This explains why training accuracy was high but test performance was terrible

      **Why This Happened**
      - Dataset quality issues: IMDB-Wiki has noisy labels from celebrity photos
      - Background bias: certain age groups might have similar photo styles/backgrounds
      - Fine-grained task: distinguishing 17 vs. 18 year-olds was genuinely hard for not only our model but also humans 

      **What I Learned**
      - Interpretability tools are CRITICAL for diagnosing model failures
      - High training accuracy means nothing without looking at what the model learned
      - Can't just trust loss curves—need to visualize attention/activations
      - Dataset quality and bias are often the bottleneck, not model architecture
technologies: PyTorch, Python, Grad-CAM, VGG-16, CNNs
---

As part of Deep Learning (CSE 493G), my group did a research project investigating facial age classification within the critical 9-25 age range, where legal thresholds (13, 18, 21) matter most for online safety and age-restricted services.

Unfortunately, our data wasn't strong enough for the models to work well. We tried multiple VGG-inspired CNN architectures—starting with a simple 3-layer model, then a deeper 9-layer version, and finally full VGG-16. All of them achieved 90%+ training accuracy but completely failed on test data (<40% accuracy), showing us that our model was severely overfitting.

Using Grad-CAM analysis, we found that the models were learning background artifacts and clothing instead of facial features. This taught us that even balanced datasets and sophisticated architectures can't overcome fundamental data quality issues. The project became more about understanding what went wrong and learning to diagnose model failures than achieving good performance.

## Relevant Links

Training notebook - https://drive.google.com/drive/u/2/folders/1oUXGInt_UqqyZTKInaesSUkq8oAN7Qwc

UTK Face Dataset - https://susanqq.github.io/UTKFace/

IMDB Wiki Dataset - https://data.vision.ee.ethz.ch/cvl/rrothe/imdb-wiki/ 
