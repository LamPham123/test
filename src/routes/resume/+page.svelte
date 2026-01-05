<script>
  import { PdfViewer } from '$lib';
</script>

<section class="mb-16">
<div class="min-h-screen bg-canvas-default py-8 px-4">
  <div class="w-full max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-text-primary mb-6 mt-8 text-center">My Resume</h1>
    <div class="w-full">
      <PdfViewer
        src="/assets/LamPham_Resume.pdf"
        height="1110px"
        width="100%"
        showDownload={true}
        showFullscreen={true}
      />
    </div>
  </div>
</div>
</section>