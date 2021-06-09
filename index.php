<!-- Task 3.1 -->

<?php
$arr = array();
for ($i = 0; $i <= 10; $i++) {
  $arr[] = rand(0, 20);
}

echo "Task 3.1";
 
echo "<pre>";
print_r($arr);
echo "</pre>";
 
$min = min($arr);
$max = max($arr);
 
foreach ($arr as $key => $value) {
  if ($value == $min) {
    $arr[$key] = $max;
  }
  if ($value == $max) {
    $arr[$key] = $min;
  }
}
 
echo "<pre>";
print_r($arr);
echo "</pre>";
?>



<!-- Task 3.2 -->

<?php
class Worker {
  public $name;
  public $age;
  public $salary;

  public function setName($name) {
    $this->name = $name;
  }
  public function setAge($age) {
    $this->age = $age;
  }
  public function setSalary($salary) {
    $this->salary = $salary;
  }

  public function getName() {
    return $this->name;
  }
  public function getAge() {
    return $this->age;
  }
  public function getSalary() {
    return $this->salary;
  }
}

$ivan = new Worker;
$ivan->setName("Иван");
$ivan->setAge(25);
$ivan->setSalary(1000);

$vasya = new Worker;
$vasya->setName("Вася");
$vasya->setAge(26);
$vasya->setSalary(2000);

echo "<br>Task 3.2<br>";

echo "<br>";
echo $ivan->getAge() + $vasya->getAge();
echo "<br>";
echo $ivan->getSalary() + $vasya->getSalary();
echo "<br>";
?>



<!-- Task 3.3 -->

<?php
class Numbers {
  public array $numbers;

  public function setNumbers($numbers) {
    $this->numbers = $numbers;
  }
  
  public function getNumbers() {
    return $this->numbers;
  }

  public function showEvenNumbers() {
    foreach($this->numbers as $key => $value){
      if ($value % 2 == 0) {
        echo "<br>$value<br>";
      }
    }
  }
}

echo "<br>Task 3.3<br>";

$numbers = new Numbers;
$numbers->setNumbers([10,11,12,13,14,15,16,17,18,19]);
$numbers->showEvenNumbers();
?>



<!-- Task 3.4 -->

<?php
echo "<br>Task 3.4<br>";

for ($i = 1; $i <= 5; $i++) {
  $fp = fopen("$i.txt", "w");
  if ($fp) echo "<br>Файл $i успешно создан<br>";
  else echo "<br>Ошибка при создании файла.<br>";
  fclose($fp);
}
?>

<?php
$file = fopen("1.txt", "a");

$newLine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n";
$writeLine = fwrite($file, $newLine);

if ($writeLine) echo "<br>Данные в файл успешно занесены.<br>";
else echo "<br>Ошибка при записи в файл.<br>";

fclose($file);
?>

<?php
$renameFile = rename("2.txt", "renamed2.txt");

if ($renameFile) echo "<br>Файл успешно переименован.<br>";
else echo "<br>Ошибка при переименовании файла.<br>";
?>

<?php
$deleteFile = unlink("3.txt");

if ($deleteFile) echo "<br>Файл успешно удален.<br>";
else echo "<br>Ошибка при удалении файла.<br>";
?>

<?php
$makeDir = mkdir("4");

if ($makeDir) echo "<br>Директория успешно создана.<br>";
else echo "<br>Ошибка при создании директории.<br>";

$moveFile = rename("4.txt", "4/4.txt");

if ($moveFile) echo "<br>Файл успешно перемещен.<br>";
else echo "<br>Ошибка при перемещении файла.<br>";
?>

<?php
function checkFile($name) {
  if (file_exists($name)) echo "<br>Файл существует.<br>";
  else echo "<br>Файл не существует.<br>";
}

checkFile("5.txt");
?>
