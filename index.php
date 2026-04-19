<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Web App</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body class="flex items-center justify-center min-h-screen">

    <div class="text-center p-8 border border-gray-800 rounded-lg bg-zinc-900 shadow-2xl">
        <h1 class="text-4xl font-bold mb-4 text-white">
            Selamat Datang di PHP App
        </h1>
        
        <p class="text-gray-400 mb-6">
            Waktu server saat ini: 
            <span class="text-blue-400 font-mono">
                <?php echo date('Y-m-d H:i:s'); ?>
            </span>
        </p>

        <div class="grid grid-cols-1 gap-4">
            <?php
                $features = ["Fast Performance", "Tailwind CSS Styling", "PHP 8.x Support"];
                foreach ($features as $feature) {
                    echo "<div class='bg-zinc-800 p-3 rounded border border-gray-700'>$feature</div>";
                }
            ?>
        </div>

        <footer class="mt-8 text-sm text-gray-500">
            &copy; <?php echo date('Y'); ?> Web Application
        </footer>
    </div>

</body>
</html>